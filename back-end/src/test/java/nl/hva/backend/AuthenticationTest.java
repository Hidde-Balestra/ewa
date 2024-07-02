package nl.hva.backend;

import nl.hva.backend.domain.dto.user.CreateUserRequest;
import nl.hva.backend.domain.dto.user.LogInRequest;
import nl.hva.backend.domain.models.CountryCode;
import nl.hva.backend.domain.models.user.User;
import nl.hva.backend.utils.JWTUtil;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import static nl.hva.backend.utils.JWTUtil.JWT_AUTHORIZATION_TOKEN_PREFACE;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * @author Hamza el Haouti
 */
@SpringBootTest(
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT
)
public class AuthenticationTest {

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private TestRestTemplate restTemplate;

    @LocalServerPort
    private int port;

    private static final String LOCAL_API_BASE = "http://localhost:";
    private static final String AUTHENTICATION_API_BASE = "/api/authenticate";
    private static final String REGISTER_API = "/register";
    private static final String LOGIN_API = "/login";

    @Test
    public void T1_CreateNewUserAccount() {
        // Arrange: Needed parameters.
        final String REGISTER_ENDPOINT = LOCAL_API_BASE + port + AUTHENTICATION_API_BASE + REGISTER_API;
        final CreateUserRequest CREATE_USER_REQUEST = new CreateUserRequest(
                "test5",
                "test5",
                "test5",
                "test5",
                "test5@test.nl",
                CountryCode.NL
        );

        // Act: Perform a request.
        var createUserResponse = this.restTemplate.postForEntity(
                REGISTER_ENDPOINT,
                CREATE_USER_REQUEST,
                User.class
        );

        // Assert: That the response is correct.
        assertEquals(
                HttpStatus.CREATED,
                createUserResponse.getStatusCode(),
                "The user could not be created."
        );

        this.validateAuthToken(createUserResponse.getHeaders());

        // Assert that the created user can login.

        // Arrange: Needed parameters.
        final var LOGIN_ENDPOINT = LOCAL_API_BASE + port + AUTHENTICATION_API_BASE + LOGIN_API;
        final var LOG_IN_REQUEST = new LogInRequest(
                CREATE_USER_REQUEST.getUsername(),
                CREATE_USER_REQUEST.getPassword()
        );

        // Act: perform a request.
        var logInResponse = this.restTemplate.postForEntity(
                LOGIN_ENDPOINT,
                LOG_IN_REQUEST,
                User.class
        );

        // Assert: That the response is correct.
        assertEquals(
                HttpStatus.ACCEPTED,
                logInResponse.getStatusCode(),
                "The user could not log in."
        );

        this.validateAuthToken(logInResponse.getHeaders());
    }

    private void validateAuthToken(HttpHeaders headers) {
        assertTrue(
                headers.containsKey(HttpHeaders.AUTHORIZATION),
                "No JWT Token has been provided."
        );

        var token = headers
                .get(HttpHeaders.AUTHORIZATION)
                .get(0)
                .replace(JWT_AUTHORIZATION_TOKEN_PREFACE, "")
                .trim();

        assertTrue(
                jwtUtil.validate(token),
                "The provided token is not valid."
        );
    }

}