import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { CheckCircle, X } from "lucide-react";

// Define the form schema with zod
const checkoutSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  zipCode: z.string().min(3, { message: "Zip code is required" }),
  country: z.string().min(2, { message: "Country is required" }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: "Card number must be 16 digits" }),
  cardExpiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Expiry date must be in MM/YY format" }),
  cardCvc: z.string().regex(/^\d{3,4}$/, { message: "CVC must be 3 or 4 digits" }),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl?: string;
}

interface CheckoutFormProps {
  product: Product;
  onClose: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ product, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // Generate a random order number
      const generatedOrderNumber = `FIT-${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`;
      setOrderNumber(generatedOrderNumber);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <Card className="w-full border-0 shadow-none">
        <CardHeader className="text-center pb-3">
          <div className="flex justify-between items-center mb-2">
            <div></div>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <CardTitle className="text-lg font-semibold text-green-600">Order Successful!</CardTitle>
          <CardDescription className="text-sm">
            Thank you for your purchase. Your order has been confirmed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 px-4">
          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-xs text-gray-500">Order Number</p>
            <p className="font-medium text-sm">{orderNumber}</p>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-sm">Order Details</h3>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                {product.imageUrl && (
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-8 h-8 object-cover rounded"
                  />
                )}
                <span className="text-sm">{product.title}</span>
              </div>
              <span className="font-medium text-sm">${product.price.toFixed(2)}</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">
              An invoice has been sent to your email address with payment details.
            </p>
            <p className="text-xs text-gray-500">
              You will receive a download link for your digital product once payment is confirmed.
            </p>
          </div>
        </CardContent>
        <CardFooter className="px-4 pt-2">
          <Button onClick={onClose} className="w-full bg-black hover:bg-gray-800 h-8 text-sm">
            Continue Shopping
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full border-0 shadow-none max-h-[95vh] flex flex-col">
      <CardHeader className="pb-3 flex-shrink-0">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg">Checkout</CardTitle>
            <CardDescription className="text-sm">Complete your purchase</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1 min-h-0">
        <CardContent className="space-y-4 px-4 overflow-y-auto flex-1">
          {/* Order Summary */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <h3 className="font-medium mb-2 text-sm">Order Summary</h3>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                {product.imageUrl && (
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-8 h-8 object-cover rounded"
                  />
                )}
                <span className="text-sm">{product.title}</span>
              </div>
              <span className="font-medium text-sm">${product.price.toFixed(2)}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-medium text-sm">
              <span>Total</span>
              <span>${product.price.toFixed(2)}</span>
            </div>
          </div>

          {/* Customer Information */}
          <div>
            <h3 className="font-medium mb-2 text-sm">Customer Information</h3>
            <div className="space-y-2">
              <div>
                <Label htmlFor="fullName" className="text-xs">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Doe"
                  {...register("fullName")}
                  className={`h-8 text-sm ${errors.fullName ? "border-red-500" : ""}`}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="text-xs">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className={`h-8 text-sm ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Billing Address */}
          <div>
            <h3 className="font-medium mb-2 text-sm">Billing Address</h3>
            <div className="space-y-2">
              <div>
                <Label htmlFor="address" className="text-xs">Address</Label>
                <Input
                  id="address"
                  placeholder="123 Main St"
                  {...register("address")}
                  className={`h-8 text-sm ${errors.address ? "border-red-500" : ""}`}
                />
                {errors.address && (
                  <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="city" className="text-xs">City</Label>
                  <Input
                    id="city"
                    placeholder="New York"
                    {...register("city")}
                    className={`h-8 text-sm ${errors.city ? "border-red-500" : ""}`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="zipCode" className="text-xs">Zip Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="10001"
                    {...register("zipCode")}
                    className={`h-8 text-sm ${errors.zipCode ? "border-red-500" : ""}`}
                  />
                  {errors.zipCode && (
                    <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>
                  )}
                </div>
              </div>
              <div>
                <Label htmlFor="country" className="text-xs">Country</Label>
                <Input
                  id="country"
                  placeholder="United States"
                  {...register("country")}
                  className={`h-8 text-sm ${errors.country ? "border-red-500" : ""}`}
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h3 className="font-medium mb-2 text-sm">Payment Information</h3>
            <div className="space-y-2">
              <div>
                <Label htmlFor="cardNumber" className="text-xs">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  {...register("cardNumber")}
                  className={`h-8 text-sm ${errors.cardNumber ? "border-red-500" : ""}`}
                />
                {errors.cardNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.cardNumber.message}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Label htmlFor="cardExpiry" className="text-xs">Expiry Date</Label>
                  <Input
                    id="cardExpiry"
                    placeholder="MM/YY"
                    {...register("cardExpiry")}
                    className={`h-8 text-sm ${errors.cardExpiry ? "border-red-500" : ""}`}
                  />
                  {errors.cardExpiry && (
                    <p className="text-red-500 text-xs mt-1">{errors.cardExpiry.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="cardCvc" className="text-xs">CVC</Label>
                  <Input
                    id="cardCvc"
                    placeholder="123"
                    {...register("cardCvc")}
                    className={`h-8 text-sm ${errors.cardCvc ? "border-red-500" : ""}`}
                  />
                  {errors.cardCvc && (
                    <p className="text-red-500 text-xs mt-1">{errors.cardCvc.message}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-2 px-4 pt-2 flex-shrink-0">
          <Button 
            type="submit" 
            className="w-full bg-welltrack-green hover:bg-green-700 h-8 text-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Complete Purchase"}
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={onClose}
            className="w-full h-8 text-sm"
          >
            Cancel
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CheckoutForm;