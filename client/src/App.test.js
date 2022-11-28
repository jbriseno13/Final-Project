import { render, screen } from '@testing-library/react';
import App from './App';
import VideosPage from './components/navBarPrivate/videospage'; 
import  NavBar from './components/navbar'; 
import VideoItem from "./components/VideoItem"; 
import Favorite from "./components/favorites";


describe("VideosPage", () => {
  test("renders videospage component", () => {
    render(<VideosPage/>)
  });
});

describe("NavBar", () => {
  test("renders NavBar component", () => {
    render(<NavBar/>)
  });
}); 


describe("VideoItem", () => {
  test("renders video item component", () => {
    render(<VideoItem/>)
  });
}); 

describe("Favorite", () => {
  test("renders favorites components", () => {
    render(<Favorite/>)
  });
});



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


