import Swal from 'sweetalert2';

export const showErrorDateChoose = () => {
  Swal.fire({
    icon: 'error',
    title: 'You can`t select a date in the past ',
  });
};
