import Swal from 'sweetalert2';

export const ErrorLogOut = (error) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops... Something went wrong',
    text: `Error: ${error}`,
  });
};
