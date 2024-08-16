// utils.js

export const handleOTPChange = (e, index, otp, setOtp, inputs) => {
  const value = e.target.value;

  // Allow only a single character in each input
  if (value.length <= 1) {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if there's a value and it's not the last input
    if (value.length === 1 && index < 3) {
      inputs.current[index + 1].focus();
    }
  }
};

export const isSubmitButtonDisabled = (otp) => {
  return otp.some((value) => value === "");
};
