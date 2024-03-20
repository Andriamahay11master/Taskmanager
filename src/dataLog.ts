const dataOnboarding = {
    image: 'images/onboarding.svg',
    imageAlt: 'Logo Free Fonts',
    imageTitle: 'Logo Free Fonts',
    title: 'Simplify, Organize, and Conquer <span>Your Day</span>',
    description: 'Take control of your tasks and achieve your goals..',
    labelButton: 'Get Started',
    routeButton: '/signup'
  }

  const dataSIgnup = {
    title: 'Create an account',
    subtitle: 'Sign up',
    emailu: 'Your Email',
    passwordu: 'Password',
    labelButton: 'Sign up',
    routeSignin: '/signin',
    textUser: 'Already a user?',
    labelSignin: 'Sign in',
  }

  const dataSignin = {
    title: 'Welcome Back',
    subtitle: 'Login',
    email: 'Your Email',
    password: 'Password',
    labelButton: 'Login',
    routeSignup: '/signup',
    textUser: "Don't have an account?",
    labelSignup: 'Sign up', 
    textForgot: 'Forgot your password?',
    routeForgot: '/forgot',
    routeClick: '/home'
  }

  const dataForgot = {
    title: 'Forgot your password?',
    subtitle: 'Enter your email and we will send you a link to reset your password',
    email: 'Your Email',
    labelButton: 'Send',
    routeSignup: '/signup',
    textUser: "Don't have an account?",
    labelSignup: 'Sign up',
  }

  export {dataOnboarding, dataSIgnup, dataSignin, dataForgot}