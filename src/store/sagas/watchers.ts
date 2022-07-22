import {all,fork} from "redux-saga/effects";

export default function* watchers() {
    yield all([
    ].map(fork))
}