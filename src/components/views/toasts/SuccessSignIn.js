import Swal from 'sweetalert2';

export const SuccessSignIn = () => {
  Swal.fire({
    icon: 'success',
    title: 'Great!!! Let`s start ',
    showConfirmButton: false,
    timer: 1500,
  });
};
