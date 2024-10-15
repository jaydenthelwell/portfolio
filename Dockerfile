# Use a base Ruby image
FROM ruby:3.1.2

# Install required dependencies, including Node.js for ExecJS
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

# Set up working directory
WORKDIR /app

# Install Bundler and Rails dependencies
COPY Gemfile Gemfile.lock ./
RUN bundle install

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
