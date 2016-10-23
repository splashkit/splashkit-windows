/*
 * SplashKit Json
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __json_h
#define __json_h

#include <string>
using std::string;


struct _json_data;
typedef struct _json_data *json;
json create_json();
json create_json(string json_string);
void free_all_json();
void free_json(json j);
void json_add_bool(json j, string key, bool value);
void json_add_number(json j, string key, double value);
void json_add_object(json j, string key, json object);
void json_add_string(json j, string key, string value);
json json_from_file(const string &filename);
json json_from_string(const string &j_string);
bool json_has_key(json j, string key);
bool json_read_bool(json j, string key);
double json_read_number(json j, string key);
json json_read_object(json j, string key);
string json_read_string(json j, string key);
void json_to_file(json j, const string &filename);
string json_to_string(json j);

#endif /* __json_h */
