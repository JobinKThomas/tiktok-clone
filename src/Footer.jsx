import React from 'react';
import './Footer.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MusicNoteIcon from '@material-ui/icons/MusicNoteOutlined';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Ticker from 'react-ticker';
function VideoFooter({ channel, description, song }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                    <AddCircleIcon className="videoFooter_add"/>

                </div>
            </div>
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt="" />
        </div>
    )
}

export default VideoFooter