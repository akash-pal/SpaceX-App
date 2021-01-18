import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import * as nextRouter from 'next/router';
import App from "../pages/index";

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

const renderApp = () => render(<App/>);

let appHeading;

afterEach(() => {
  cleanup()
});

beforeEach(() => {
	const {getByTestId} = renderApp();
  appHeading = getByTestId('app-heading');
})

test('App renders', ()=> {
  expect(appHeading).toHaveTextContent("SpaceX Launch Program");
})