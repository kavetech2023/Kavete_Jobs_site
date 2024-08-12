import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './Transition.css';

function Transition({ children }) {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
}
export default Transition;