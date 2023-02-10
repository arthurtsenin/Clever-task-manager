import Swal from 'sweetalert2';

export const showSuccessSignIn = () => {
  Swal.fire({
    icon: 'success',
    title: 'Great!!! Let`s start ',
    showConfirmButton: false,
    timer: 1500,
  });
};
