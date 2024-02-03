import AuthProvider from 'context/AuthContext/AuthProvider';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from 'router';
import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />;
      </AuthProvider>
    </Provider>
  );
}

export default App;
