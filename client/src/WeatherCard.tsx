import { useEffect, useId, useState } from 'react'
import axios from 'axios'
import './WeatherCard.css'

// Open-Meteo is free for noncommercial teaching use and needs no API key.
// Change these values together to use another location.
const location = {
  name: 'San Pedro, Belize',
  latitude: 17.92,
  longitude: -87.97
}

const weatherUrl =
  `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m&temperature_unit=celsius`

type WeatherResponse = {
  current?: {
    temperature_2m?: number
  }
}

// Example 1: Axios returns a Promise. .then() runs when it resolves.
// Axios parses JSON automatically and puts the body in response.data.
function loadWithAxios(signal: AbortSignal): Promise<WeatherResponse> {
  return axios
    .get<WeatherResponse>(weatherUrl, { signal })
    .then((response) => response.data)
}

// Example 2: An async function also returns a Promise.
// await pauses this function until a Promise settles.
async function loadWithFetch(
  signal: AbortSignal
): Promise<WeatherResponse> {
  const response = await fetch(weatherUrl, { signal })

  // Fetch does not automatically reject HTTP error statuses.
  if (!response.ok) {
    throw new Error(
      `Weather request failed (HTTP ${response.status}).`
    )
  }

  // Parse the JSON response.
  const data: WeatherResponse = await response.json()
  return data
}

// Keep both examples available.
// Currently the component uses Axios below.
const weatherRequests = {
  axios: loadWithAxios,
  fetch: loadWithFetch
}

function WeatherCard() {
  const id = useId()

  const [refreshCount, setRefreshCount] = useState(0)
  const [temperature, setTemperature] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    setError('')
    setTemperature(null)

    // Stop the request if it takes longer than 15 seconds.
    const timeout = window.setTimeout(() => {
      controller.abort()
      setError('The weather request timed out. Please try again.')
      setIsLoading(false)
    }, 15000)

    async function loadWeather() {
      try {
        // Professor's Axios example.
        // To test Fetch instead, change .axios to .fetch.
        const data = await weatherRequests.axios(controller.signal)

        const nextTemperature =
          data?.current?.temperature_2m

        if (
          typeof nextTemperature !== 'number' ||
          !Number.isFinite(nextTemperature)
        ) {
          throw new Error(
            'The weather service did not return a valid temperature.'
          )
        }

        if (!controller.signal.aborted) {
          setTemperature(nextTemperature)
        }
      } catch {
        if (!controller.signal.aborted) {
          setError(
            'Unable to load the temperature. Please try again.'
          )
        }
      } finally {
        window.clearTimeout(timeout)

        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    void loadWeather()

    return () => {
      window.clearTimeout(timeout)
      controller.abort()
    }
  }, [refreshCount])

  return (
    <section
      className="weather-card"
      aria-labelledby={`${id}-heading`}
    >
      <h2 id={`${id}-heading`}>Weather</h2>

      <p>{location.name}</p>

      <div
        role="status"
        aria-live="polite"
        aria-busy={isLoading}
      >
        <p className="weather-card-temperature">
          {temperature === null
            ? '--'
            : `${temperature.toFixed(1)} °C`}
        </p>

        <p>
          {isLoading
            ? 'Loading weather…'
            : temperature === null
              ? 'Temperature unavailable'
              : 'Current temperature'}
        </p>
      </div>

      {error && (
        <p
          className="weather-card-error"
          role="alert"
        >
          {error}
        </p>
      )}

      <div className="weather-card-controls">
        <button
          type="button"
          disabled={isLoading}
          onClick={() =>
            setRefreshCount((count) => count + 1)
          }
        >
          {isLoading
            ? 'Loading…'
            : error
              ? 'Try again'
              : 'Refresh weather'}
        </button>
      </div>

      <p className="weather-card-source">
        Weather data by{' '}
        <a href="https://open-meteo.com/">
          Open-Meteo
        </a>
      </p>
    </section>
  )
}

export default WeatherCard