import { FlapperSpinner } from 'react-spinners-kit';
import { LoaderContainer } from './Loader.styles';
import { MAIN_COLOR } from '../../../constants/mainColor';

export const Loader = ({ color = MAIN_COLOR, size = 60, loading = false, speedMultiplier = 1 }) => {
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
