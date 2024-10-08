import emailjs from 'emailjs-com';

export const sendEmail = (
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  },
  onSuccess: (message: string) => void,
  onError: (message: string) => void
) => {
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID!,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID!
    )
    .then(
      (result) => {
        console.log(result.text);
        onSuccess('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        onError('Failed to send message!');
      }
    );
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
