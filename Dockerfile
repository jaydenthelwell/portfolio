# Use a base Ruby image
FROM ruby:3.1.2

# Install required dependencies, including Node.js for ExecJS and PostgreSQL client
RUN apt-get update -qq && \
    apt-get install -y nodejs postgresql-client curl && \
    apt-get clean

# Set up working directory
WORKDIR /app

# Install Bundler and Rails dependencies
COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install

# Install JavaScript runtime (Node.js is already included here)
# This line is not necessary as Node.js is already installed
# RUN curl -sL https://deb.nodesource.com/setup_16.x | bash && apt-get install -y nodejs

# Copy the rest of your application code
COPY . .

# Precompile assets (if needed) and set the entrypoint
RUN RAILS_ENV=production bundle exec rake assets:precompile

# Set environment variables (Optional)
ENV RAILS_ENV=production

# Expose the port your app runs on
EXPOSE 3000

# Start the Rails server
CMD ["bin/rails", "server", "-b", "0.0.0.0"]
