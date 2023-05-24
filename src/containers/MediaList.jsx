import { Link } from "react-router-dom"
import MediaCard from "../components/MediaCard"
import NoResults from "../components/NoResults"
import PropTypes from 'prop-types'
import Slider from "react-slick"
import { SLIDER_SETTINGS } from "../utils/constants"

const MediaList = ({ data, isSlider, mediaType }) => {

    return (
        <>
            {
                !isSlider ? (
                    <div className="media-list__content">
                        {
                            data.results ? (
                                data.results.map((media) => {
                                    return (
                                        <div className="media-list__item" key={media.id}>
                                            <Link className="media-list__link" to={`/${mediaType}/${media.id}`}>
                                                <MediaCard media={media} mediaType={mediaType} />
                                            </Link>
                                        </div>
                                    )
                                })
                            ) : (<NoResults />)
                        }
                    </div>
                ):
                (
                    <div className="media-list__slider">
                        <Slider {...SLIDER_SETTINGS}>
                            {
                                data.results ? (
                                    data.results.map((media) => {
                                        return (
                                            <div className="media-list__item" key={media.id}>
                                                <Link className="media-list__link" to={`/${mediaType}/${media.id}`}>
                                                    <MediaCard media={media} mediaType={mediaType} />
                                                </Link>
                                            </div>
                                        )
                                    })    
                                ) : (<NoResults />)
                            }
                        </Slider>
                    </div>
                )
            }
        </>
    )
}

MediaList.propTypes = {
    data: PropTypes.object,
    isSlider: PropTypes.bool,
    mediaType: PropTypes.string,
}

export default MediaList
