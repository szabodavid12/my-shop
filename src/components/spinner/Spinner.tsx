import { TailSpin } from "react-loader-spinner";

const Spinner = () => (
  <TailSpin
    visible={true}
    height="80"
    width="80"
    color="#6100FF"
    ariaLabel="tail-spin-loading"
    radius="3"
    wrapperClass="flex justify-center mt-3"
  />
);

export default Spinner;
