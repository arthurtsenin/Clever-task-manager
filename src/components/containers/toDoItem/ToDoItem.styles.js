import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { MAIN_COLOR } from '../../../constants/mainColor';

export const Todo = styled.div`
  display: flex;
  align-items: center;
  background-color: ${MAIN_COLOR.background};
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
`;

export const TodoText = styled.div`
  flex: 1 1;
  text-align: left;
  font-weight: 900;
  font-size: 20px;
  padding: 5px;
  overflow-wrap: break-word;
`;

export const TodoDate = styled.div`
  font-weight: 600;
  font-size: 20px;
  width: 150px;
  text-align: center;
`;

export const StyledEditIcon = styled(EditIcon)`
  margin-left: 10px;
  :hover {
    cursor: pointer;
  }
`;
export const StyledDeleteIcon = styled(DeleteIcon)`
  margin-left: 10px;
  :hover {
    cursor: pointer;
  }
`;
