import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { PageTitle } from "../../layout-components";
// import MessengerHeader from "../../Components/Homepage/Homepage1/MessengerHeader";
import { Prompt } from "react-router";
import PageInvoice1 from "../../Components/PageInvoice/PageInvoice1";

export default function PageInvoice() {
  const dispatch = useDispatch();
  const [blocking, setBlocking] = useState(false);
  const token = useSelector((state) =>
    state.buyToken.token === null ? "" : state.buyToken.token
  );

  // console.log(token);

  useEffect(() => {
    block();
  }, []);

  useEffect(() => {
    props.history.listen(() => {
      // Detecting, user has changed URL
      if (props.history.location.pathname) {
        dispatch(clearToken());
        window.location.href = `${process.env.REACT_APP_URL}/products`;
      } else if (props.history.location.pathname && token.success === false) {
        dispatch(clearToken());
        // this.props.history.push(`/Products`);
        window.location.href = `${process.env.REACT_APP_URL}/products`;
      }
    });
  }, [token.success]);

  console.log(token);

  const block = () => {
    window.onbeforeunload = function () {
      setBlocking({ isBlocking: true });
      return "";
    }.bind(this);

    if (token.success === false && token === null) {
      dispatch(clearToken());
      // // history.push(`${process.env.REACT_APP_URL}/products`);
      window.location.href = `${process.env.REACT_APP_URL}/products`;
    }
  };

  return (
    <div>
      <Prompt
        when={blocking}
        message={() => `On reload all transaction history will b lost`}
      />
      <PageInvoice1 />
    </div>
  );
}
