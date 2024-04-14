import PropTypes from "prop-types"

function MovieCard(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt="Movie cover image" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}
MovieCard.proptypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,

}
MovieCard.defaultProps ={
    imageUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAgVBMVEUAAADm5uZUVFQODg42Njbi4uLn5+fu7u7r6+vb29vv7+////9PT0+9vb1iYmIgICB7e3uMjIyDg4NpaWkrKysVFRX39/c/Pz+/v78eHh4ZGRmmpqZzc3MlJSVFRUXFxcWbm5uxsbHNzc2UlJSoqKhcXFxCQkKJiYkxMTFmZmaenp7UIYQhAAADzklEQVR4nO3ca4+qOhQG4HIpd7AUKF64iOgW/f8/8HQ8OTOAOpuc7J1W530yMYb4YWVlrVJxughZpNhurWWfBAAAAPiRth8vheooXsMQM/m626mO4yUUsbgQ0od71YG8hlhUhPDwqjqO17AOOCFnscM3vQWK2JPZSrtBdSAvIb9lq1Ydxouob+sWLBSHyNZyseBY4BeLD6XqEF5HbaKyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANFY0SVUlDc69/161pp4reXSNs2vfKvde6Br0xnBDb4/zWM8U3BcONT5RR/gc3fjQppO9Z0zIjuw2quPSUR0HxgNBjPPcd6zOfZQrw3A7nI2cuz7JlcwWRnbMZIbzLFmOkamOTi+rxwvWf8vWSnV8Wkm+yZXMVqI6Pq3EwdemwZmvXjSIVcenlXFh0dbz5qWlOj6dnMJRYfnN6eBNlnsanlRHqJFejJN1ItbVH/ciFb3qCDXSjdrQ8U15JYnHvRh0qiPUSOuNk3XruZz7X63otaoj1MjhPlmEVF93SO+gNj6ttO5dssrjqDVdVNaX6Zolk7Vhh/FuAmvWSDq5G5okmizv8m6Yqo5QI9Fkn2We/emulIaR6gh14o42odT3Zk8gHFd1fFrZjfrw7mENFRhwPBbNi2lSWB66cKw4fvc864ifeCZMf/6k4ZN3+/4DI+fnyTqrjk0/z36xwO8Vj+zcB4u84+JO+FBP74rLpXiS9US2DgLjc8NFaRCs8SvYU3nVCiG7kVLZf0K0Va46Ir2VfUu9IPBo2+P/jZbY5vlWdQwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKC55bPyatsiZGuv5JuPKQqFfMnt+uP6hgz234tQG+zXjt4N2yirTcnvPpqztLLq7Jxuzmki0xaZhFy5mVv8XNn8/O4DCrcbHmRWdRiml8tunSfBaT5TNqnIbhNV+d5MbZaT7UUmuauapo4yXpnFux+Bj9eeMOPNdTZ66tTxwu7SWQpJkpEjaaotz1jNBmJXsrqai3xHKsYa691nK4RhKKIgYsuK4sRWRzLwsvu1j9iKRJksTd7wwUoHxi75u1eWK5NlOlY6KwqzP1l1yu+OtV+uKztqepMkfUkK9nFGOUvLZJXIS+wHDFfoxYUk/uxOFrVtnojfzQD4eee5rb15ObD51Sito3fvqv/DIv2D4eDW7Q8A4KXlDVaypdjBjxvVQbyIxJE7/nZY/cuCsXmy+vDj69Ehvll3ZmTCp/kOnguZLCdlNzyzYWQ+JnXoROhhNvZCA99jvh4AAADAn/MPfgw8IOqoBgcAAAAASUVORK5CYII=",
    title:"No title Provided",
    description:"No movie description is attained"
}
export default MovieCard;