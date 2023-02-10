import Swal from 'sweetalert2';

export const SuccessSignUp = () => {
  return Swal.fire({
    icon: 'success',
    title: 'Great job!!! We are glad that you have chosen our app.',
    width: 600,
    padding: '3em',
    color: 'white',
    background: 'orange',
    backdrop: `
      rgba(0,0,123,0.4)
      url("nyan-cat.gif")
      left top
      no-repeat
    `,
  });
};
