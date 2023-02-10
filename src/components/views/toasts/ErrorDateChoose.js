import Swal from 'sweetalert2';

export const ErrorDateChoose = () => {
  Swal.fire({
    icon: 'error',
    title: 'You can`t select a date in the past ',
  });
};
