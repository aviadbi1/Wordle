import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-2 text-center text-sm">
          The source code for this wordle is{" "}
          <a
            href={`https://github.com/aviadbi1/Wordle`}
            className="underline hover:text-blue-600 duration-200 transition-colors"
          >
            available on GitHub
          </a>
          <p className="bg-fruit-salad-500"></p>
          <p className="bg-sundance-500"></p>
          <p className="bg-gunsmoke-500"></p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
