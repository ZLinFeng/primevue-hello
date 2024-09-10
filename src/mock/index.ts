import authInitMock from "./authMock"

export default function initMock() {
    if (import.meta.env.MODE === "development") {
        authInitMock()
    }
}