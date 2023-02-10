import Swal from 'sweetalert2';

export const ErrorSignIn = (error) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops... Incorrect data. Try again',
    text: `Error: ${error}`,
  });
};
