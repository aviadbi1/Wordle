import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-2 flex flex-col lg:flex-row items-center">
          <h5 className="text-4xl lg:text-[1rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            by Aviados
          </h5>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
