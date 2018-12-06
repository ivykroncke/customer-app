class Api::DupesController < ApplicationController
include HTTParty

def index
    @dupes = HTTParty.get(
        "https://api.salesloft.com/v2/people.json", 
        headers: { 
            "Authorization" => "Bearer #{ENV["SECRET_KEY"]}" }
        )
    render json: @dupes
end

end
