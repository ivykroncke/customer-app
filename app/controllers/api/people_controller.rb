class Api::PeopleController < ApplicationController
    include HTTParty

    def index
        @people = HTTParty.get(
            "https://api.salesloft.com/v2/people.json", 
            headers: { 
                "Authorization" => "Bearer #{ENV["SECRET_KEY"]}" }
            )
        render json: @people
    end

    def show
        @id
        @people = HTTParty.get(
            "https://api.salesloft.com/v2/people/#{params[:id]}.json",
            headers: { 
                "Authorization" => "Bearer #{ENV["SECRET_KEY"]}" }
        )
        render json: @people
    end

end
