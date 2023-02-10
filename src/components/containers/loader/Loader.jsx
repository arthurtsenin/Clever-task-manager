import { FlapperSpinner } from 'react-spinners-kit';
import { LoaderContainer } from './Loader.styles';

export const Loader = ({ color = '#FF6600', size = 50, loading = false, speedMultiplier = 1 }) => {
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
