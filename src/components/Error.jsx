import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'

const Error = ({ error }) => {

    return (
        <Alert className="error-alert" variant="danger" dismissible>
            <Alert.Heading className="error-alert__title">Oh snap! You got an error!</Alert.Heading>
            <p className="error-alert__description">{error.data.status_message}</p>
        </Alert>
    )
}

Error.propTypes = {
    error: PropTypes.object,
}

export default Error
