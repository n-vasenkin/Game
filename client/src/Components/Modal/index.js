import React, {Component} from 'react';
import './style.css';
import Dialog from '@material-ui/core/Dialog';

/* REDUX */
import {bindActionCreators} from "redux";
import {changeModal} from "../../Store/actions";
import connect from "react-redux/es/connect/connect";

/* IMG */
import WinImg from '../../Static/img/modal/win.png';
import LostImg from '../../Static/img/modal/lost.png';

class Modal extends Component {
    render() {
        const {modal, changeModal, statusGame} = this.props;
        return (
            <Dialog open={modal} maxWidth="xs" fullWidth={true}>
                <div className="modal_window">
                    <img src={statusGame === "loos" ? LostImg : WinImg} alt="status_game" className="modal_img"/>
                    <div className="modal_game_status">
                        <p>Ты {statusGame === "loos" ? "проиграл" : "победил"}!</p>
                        <p>Твоё время: 20:02</p>
                    </div>
                    <aside className="modal_btn_panel">
                        <button
                            className="gold_btn"
                            onClick={() => changeModal()}
                        >Ещё раз</button>
                    </aside>

                </div>
            </Dialog>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        statusGame: state.statusGame,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeModal: bindActionCreators(changeModal, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);