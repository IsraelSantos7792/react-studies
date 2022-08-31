import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("is with text 'Load More'", () => {
    render(<Button text="load more"/>);

    const button = screen.getByRole('button', {name: /load more/i});
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('class', 'button');
  });

  it("should call function on button click", () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn}/>);



    const button = screen.getByRole('button', {name: /load more/i});
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
    
  });

  it("should be disabled when disabled is true", () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} disabled={false}/>);



    const button = screen.getByRole('button', {name: /load more/i});
    fireEvent.click(button);

    expect(button).toBeEnabled();
    
  });
});

