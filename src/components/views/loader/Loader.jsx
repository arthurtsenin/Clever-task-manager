import { FlapperSpinner } from 'react-spinners-kit';
import { LoaderContainer } from './Loader.styles';
import { LOADER_SETTINGS } from '@constants/loaderDefault';

export const Loader = ({
  theme,
  size = LOADER_SETTINGS.size,
  loading = LOADER_SETTINGS.loading,
  speedMultiplier = LOADER_SETTINGS.speedMultiplier,
}) => {
  return (
    <LoaderContainer>
      <FlapperSpinner
        color={theme.changeTheme.main}
        size={size}
        speedMultiplier={speedMultiplier}
        loading={loading}
      />
    </LoaderContainer>
  );
};
