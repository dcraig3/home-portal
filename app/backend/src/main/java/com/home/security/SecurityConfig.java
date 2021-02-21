// package com.home.security;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
// import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// import org.springframework.security.config.http.SessionCreationPolicy;


// @Configuration
// @EnableWebSecurity
// @EnableGlobalMethodSecurity(securedEnabled = true)
// public class SecurityConfig extends WebSecurityConfigurerAdapter {

    /*
	 * Enables x509 client authentication.
	 */
    // @Override
    //     protected void configure(HttpSecurity http) throws Exception {
    //         http.authorizeRequests().anyRequest().authenticated()
    //         .and().x509()
    //         .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.NEVER)
    //         .and().csrf().disable();
    // }

    // @Override
	// protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	// 	auth.inMemoryAuthentication().withUser("localhost").password("none").roles("USER");
	// }

// }