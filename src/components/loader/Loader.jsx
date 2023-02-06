import { FlapperSpinner } from 'react-spinners-kit';
import { LoaderContainer } from './Loader.styled';

export const Loader = ({ color = 'orange', size = 60, loading = false, speedMultiplier = 1 }) => {
  return (
    <LoaderContainer>
      <FlapperSpinner
        color={color}
        size={size}
        speedMultiplier={speedMultiplier}
        loading={loading}
      />
    </LoaderContainer>
  );
};
