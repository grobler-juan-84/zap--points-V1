export const authContent = {
  // shared
  emailLabel: 'Email Address',
  passwordLabel: 'Password',
  confirmPasswordLabel: 'Confirm Password',
  roleLabel: 'Role',

  // login
  loginButtonText: 'Login',
  loginButtonLoadingText: 'Logging in…',
  forgotPasswordLabel: 'Forgot Password?',
  dontHaveAccountLabel: "Don't have an account?",
  signUpLabel: 'Sign up',

  // signup
  signupLabel: 'Create your account',
  signupButtonText: 'Create Account',
  signupButtonLoadingText: 'Creating account…',
  signupSubtitleLabel: 'Enter your details to create an account.',
  loginLabel: 'Login',
  alreadyHaveAccountLabel: 'Already have an account?',
  titleMr: 'Mr',
  titleMrs: 'Mrs',
  titleMs: 'Ms',
  roleUser: 'User',
  roleAdmin: 'Admin',

  // forgot password
  forgotPasswordTitle: 'Forgot password',
  forgotPasswordRequestSubtitle: 'Enter email and receive a 6-digit code',
  forgotPasswordVerifySubtitle: 'Enter the code from your email to continue.',
  forgotPasswordSendCodeButton: 'Send code',
  forgotPasswordSendingButton: 'Sending…',
  forgotPasswordVerifyButton: 'Verify',
  forgotPasswordVerifyingButton: 'Verifying…',
  forgotPasswordBackButton: 'Back',
  forgotPasswordOtpLabel: '6-digit code',
  forgotPasswordOtpPlaceholder: '000000',
  forgotPasswordCodeSentPrefix: 'Code sent to',
  forgotPasswordBackToLogin: 'Back to login',

  // reset password
  resetPasswordTitle: 'Reset password',
  resetPasswordSubtitle: 'Choose a new password for your account.',
  resetPasswordCheckingSession: 'Checking your session...',
  resetPasswordExpiredMessage:
    'This link is invalid or has expired. Request a new reset link.',
  resetPasswordForgotLink: 'Forgot password',
  resetPasswordNewLabel: 'New password',
  resetPasswordConfirmLabel: 'Confirm new password',
  resetPasswordUpdateButton: 'Update password',
  resetPasswordSavingButton: 'Saving…',

  // placeholders
  firstNamePlaceholder: 'Enter your first name',
  lastNamePlaceholder: 'Enter your last name',
  emailPlaceholder: 'Enter your email address',
  passwordPlaceholder: 'Enter your password',
  confirmPasswordPlaceholder: 'Confirm your password',

  // validation & feedback (auth hooks)
  loginSuccess: 'Login successful.',
  loginError: 'Failed to sign in. Please try again.',
  signupSuccess: 'Success! Redirecting you to the login page...',
  signupError: 'Failed to sign up. Please try again.',
  passwordsMismatch: 'Passwords do not match.',
  passwordTooShort: 'Password must be at least 6 characters.',
  forgotCodeSent: 'Code sent. Check your inbox.',
  forgotSendError: 'Could not send code. Try again.',
  forgotOtpIncomplete: 'Enter the full 6-digit code.',
  forgotVerifySuccess: 'Code verified.',
  forgotVerifyError: 'Invalid code. Try again.',
  resetSuccess: 'Password updated.',
  resetError: 'Could not update password. Try again.',
} as const
