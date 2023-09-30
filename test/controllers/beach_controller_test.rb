require "test_helper"

class BeachControllerTest < ActionDispatch::IntegrationTest
  test "should get beach" do
    get beach_beach_url
    assert_response :success
  end
end
