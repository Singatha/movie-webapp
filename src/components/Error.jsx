import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'

const Error = ({ errorMsg }) => {

    return (
        <Alert className="error-alert" variant="danger" dismissible>
            <Alert.Heading className="error-alert__title">Oh snap! You got an error!</Alert.Heading>
            <p className="error-alert__description">{errorMsg}</p>
        </Alert>
    )
}

Error.propTypes = {
    errorMsg: PropTypes.string,
}

export default Error
