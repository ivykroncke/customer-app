class Api::PeopleController < ApplicationController
    include HTTParty

    def index
        puts ENV["secret_key"]
        puts "Banana"
        @people = HTTParty.get(
            "https://api.salesloft.com/v2/people.json?", 
            headers: { 
                "Authorization" => "Bearer #{ENV["SECRET_KEY"]}" }
            )
        render json: @people
    end

    def show
    end

    def person_params
        params.require(:person).permit(:email_address, :full_name)
    end

end
