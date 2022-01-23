import {showMessage} from 'react-native-flash-message';

export const showSuccessMessage = message => {
  showMessage({
    message,
    type: 'success',
    floating: true,
    icon: 'success',
  });
};

export const showWarningMessage = message => {
  showMessage({
    message,
    type: 'warning',
    floating: true,
    icon: 'warning',
  });
};
