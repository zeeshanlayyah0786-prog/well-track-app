import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { CheckCircle, CreditCard, Mail, User, MapPin, Shield, Lock, ArrowLeft, ArrowRight } from 'lucide-react';

interface CheckoutFlowProps {
  productName?: string;
  productPrice?: number;
  onClose?: () => void;
}

const CheckoutFlow: React.FC<CheckoutFlowProps> = ({ 
  productName = "Premium Workout Guide", 
  productPrice = 29.99,
  onClose 
}) => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    // Simulate realistic payment processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setStep(4);
  };

  const stepTitles = [
    "Let's get started with your details",
    "Where should we send your purchase?",
    "Secure payment to complete your order"
  ];

  const renderStep1 = () => (
    <div className="space-y-3">
      <div className="text-center mb-3">
        <h3 className="text-base font-semibold text-gray-900 mb-1">
          {stepTitles[0]}
        </h3>
        <p className="text-gray-600 text-xs">
          We'll use this information to create your account and send you your purchase
        </p>
      </div>
      
      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="firstName" className="text-xs font-medium text-gray-700">
              First Name *
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder="Enter your first name"
              className="mt-1 h-8"
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-xs font-medium text-gray-700">
              Last Name *
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder="Enter your last name"
              className="mt-1 h-8"
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="email" className="text-xs font-medium text-gray-700">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="your.email@example.com"
            className="mt-1 h-8"
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            We'll send your download link and receipt to this email
          </p>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-3">
      <div className="text-center mb-3">
        <h3 className="text-base font-semibold text-gray-900 mb-1">
          {stepTitles[1]}
        </h3>
        <p className="text-gray-600 text-xs">
          This helps us comply with tax regulations and send physical items if needed
        </p>
      </div>
      
      <div className="space-y-3">
        <div>
          <Label htmlFor="address" className="text-xs font-medium text-gray-700">
            Street Address *
          </Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            placeholder="123 Main Street, Apt 4B"
            className="mt-1 h-8"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label htmlFor="city" className="text-xs font-medium text-gray-700">
              City *
            </Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              placeholder="New York"
              className="mt-1 h-8"
              required
            />
          </div>
          <div>
            <Label htmlFor="zipCode" className="text-xs font-medium text-gray-700">
              ZIP Code *
            </Label>
            <Input
              id="zipCode"
              value={formData.zipCode}
              onChange={(e) => handleInputChange('zipCode', e.target.value)}
              placeholder="10001"
              className="mt-1 h-8"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-3">
      <div className="text-center mb-3">
        <h3 className="text-base font-semibold text-gray-900 mb-1">
          {stepTitles[2]}
        </h3>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
          <Shield className="h-3 w-3 text-green-500" />
          <span>Your payment information is encrypted and secure</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <Label htmlFor="nameOnCard" className="text-xs font-medium text-gray-700">
            Cardholder Name *
          </Label>
          <Input
            id="nameOnCard"
            value={formData.nameOnCard}
            onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
            placeholder="Name as it appears on your card"
            className="mt-1 h-8"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="cardNumber" className="text-xs font-medium text-gray-700">
            Card Number *
          </Label>
          <div className="relative">
            <Input
              id="cardNumber"
              value={formData.cardNumber}
              onChange={(e) => handleInputChange('cardNumber', e.target.value)}
              placeholder="1234 5678 9012 3456"
              className="mt-1 h-8 pr-8"
              required
            />
            <CreditCard className="absolute right-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="expiryDate" className="text-xs font-medium text-gray-700">
              Expiry Date *
            </Label>
            <Input
              id="expiryDate"
              value={formData.expiryDate}
              onChange={(e) => handleInputChange('expiryDate', e.target.value)}
              placeholder="MM/YY"
              className="mt-1 h-8"
              required
            />
          </div>
          <div>
            <Label htmlFor="cvv" className="text-xs font-medium text-gray-700">
              Security Code *
            </Label>
            <Input
              id="cvv"
              value={formData.cvv}
              onChange={(e) => handleInputChange('cvv', e.target.value)}
              placeholder="123"
              className="mt-1 h-8"
              maxLength={4}
              required
            />
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
          <div className="flex items-center gap-2 text-blue-700 text-xs">
            <Lock className="h-3 w-3" />
            <span className="font-medium">Secure Payment</span>
          </div>
          <p className="text-xs text-blue-600 mt-1">
            Your payment is processed securely. We don't store your card details.
          </p>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="text-center space-y-3 py-4">
      <div className="flex justify-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-8 w-8 text-green-500" />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-green-600 mb-2">
          Welcome to WELL TRACK APP! 🎉
        </h3>
        <p className="text-gray-600 mb-3 text-xs">
          Your order has been confirmed and you're all set to start your fitness journey with us.
        </p>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-2 mb-3 text-left">
          <div className="flex items-center gap-2 text-green-700 mb-1">
            <Mail className="h-3 w-3" />
            <span className="font-semibold text-xs">Check your email!</span>
          </div>
          <p className="text-xs text-green-700 mb-1">
            We've sent everything you need to <strong>{formData.email}</strong>:
          </p>
          <ul className="text-xs text-green-600 space-y-0.5 ml-3">
            <li>• Download link for your {productName}</li>
            <li>• Order confirmation and receipt</li>
            <li>• Getting started guide</li>
            <li>• Access to our community</li>
          </ul>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-2 text-xs text-gray-600">
          <div className="grid grid-cols-2 gap-3 text-left">
            <div>
              <span className="font-medium text-gray-700">Order ID:</span>
              <br />
              #FIT-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </div>
            <div>
              <span className="font-medium text-gray-700">Amount:</span>
              <br />
              ${productPrice}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProcessing = () => (
    <div className="text-center space-y-3 py-6">
      <div className="flex justify-center">
        <div className="w-10 h-10 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-1">
          Processing your order...
        </h3>
        <p className="text-gray-600 text-xs">
          Please don't close this window. We're setting up your account and preparing your download.
        </p>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
      <Card className="w-full max-w-md h-fit max-h-[95vh] sm:max-h-[90vh] md:max-h-[85vh] overflow-hidden bg-white">
        <CardHeader className="pb-2 flex-shrink-0">
          <CardTitle className="flex items-center justify-between text-lg">
            <span className="truncate pr-2">Secure Checkout</span>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose} className="flex-shrink-0">
                ×
              </Button>
            )}
          </CardTitle>
          
          {step < 4 && !isProcessing && (
            <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
              <span>Step {step} of 3</span>
              <div className="flex items-center space-x-1">
                {[1, 2, 3].map((stepNum) => (
                  <div
                    key={stepNum}
                    className={`w-2 h-2 rounded-full ${
                      step >= stepNum ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </CardHeader>
        
        <CardContent className="px-4 sm:px-6 pb-4 overflow-y-auto flex-1 min-h-0">
          <div className="space-y-3">
            {/* Order Summary - Always visible except on success */}
            {step < 4 && !isProcessing && (
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-semibold mb-2 text-gray-900 text-sm">Order Summary</h4>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1 pr-2">
                    <span className="text-sm font-medium text-gray-900">{productName}</span>
                    <p className="text-xs text-gray-500 mt-1">Digital download • Instant access</p>
                  </div>
                  <span className="font-bold text-gray-900">${productPrice}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between items-center font-bold text-gray-900">
                  <span>Total</span>
                  <span>${productPrice}</span>
                </div>
              </div>
            )}

            {/* Step Content */}
            <div className="min-h-0">
              {isProcessing ? renderProcessing() : (
                <>
                  {step === 1 && renderStep1()}
                  {step === 2 && renderStep2()}
                  {step === 3 && renderStep3()}
                  {step === 4 && renderStep4()}
                </>
              )}
            </div>

            {/* Navigation Buttons */}
            {step < 4 && !isProcessing && (
              <div className="flex flex-col sm:flex-row gap-2 pt-2 flex-shrink-0">
                <Button 
                  variant="outline" 
                  onClick={handleBack}
                  disabled={step === 1}
                  className="flex items-center gap-2 order-2 sm:order-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button 
                  onClick={step === 3 ? handleSubmit : handleNext}
                  className="bg-green-600 hover:bg-green-700 flex items-center gap-2 order-1 sm:order-2 flex-1"
                  disabled={isProcessing}
                >
                  {step === 3 ? 'Complete Order' : 'Continue'}
                  {step < 3 && <ArrowRight className="h-4 w-4" />}
                </Button>
              </div>
            )}

            {step === 4 && (
              <div className="flex justify-center pt-2 flex-shrink-0">
                <Button 
                  onClick={onClose} 
                  className="bg-green-600 hover:bg-green-700 px-6"
                >
                  Start Using WELL TRACK APP
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CheckoutFlow;