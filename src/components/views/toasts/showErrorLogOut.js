import Swal from 'sweetalert2';

export const showErrorLogOut = (error) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops... Something went wrong',
    text: `Error: ${error}`,
  });
};
