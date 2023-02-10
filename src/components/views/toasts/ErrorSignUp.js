import Swal from 'sweetalert2';

export const ErrorSignUp = (error) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops... We have problems with your registration. Try again',
    text: `Error: ${error}`,
  });
};
