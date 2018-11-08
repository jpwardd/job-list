class Api::V1::CustomersController < ApplicationController
   protect_from_forgery unless: -> { request.format.json? }

  def index
  
    render json: Customer.where(user: current_user)
   
  end

  def show
		customers = Customer.find(params[:id])
		render json: customers
	end

  def create
    customer = Customer.new(customer_params)
    customer.user = current_user
    if customer.save
      render json: customer 
    else
      render json: { error: customer.errors.full_messages.join(', ') }, status: :unprocessable_entity
    end
  end

  def update
    customer = Customer.find(params[:id])

    if review.update(customer_params)
		  render json: customer
		end
  end

def destroy
  Customer.destroy(params[:id])
end

  private

  def customer_params
    params.require(:customer).permit(:first_name, :last_name, :phone_number, :email, :address, :city, :state, :zip_code, :notes) 
  end
end