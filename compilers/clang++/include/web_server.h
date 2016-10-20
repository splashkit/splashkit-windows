/*
 * SplashKit Web Server
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __web_server_h
#define __web_server_h

#include <string>
using std::string;


struct _server_request_data;
typedef struct _server_request_data *server_request;
struct _server_response_data;
typedef struct _server_response_data *server_response;
struct _web_server_data;
typedef struct _web_server_data *web_server;
bool has_waiting_requests(web_server server);
server_request next_web_request(web_server server);
string request_get_uri(server_request r);
void send_response(server_request r, string message);
void send_response(server_request r, server_response resp);
void send_response(server_request r, string message, string content_type);
web_server start_web_server();
web_server start_web_server(string port);
void stop_web_server(web_server server);

#endif /* __web_server_h */
