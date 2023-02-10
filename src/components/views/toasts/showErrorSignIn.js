import Swal from 'sweetalert2';

export const showErrorSignIn = (error) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops... Incorrect data. Try again',
    text: `Error: ${error}`,
  });
};
