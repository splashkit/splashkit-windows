/*
 * SplashKit Window Manager
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __window_manager_h
#define __window_manager_h
#include "types.h"

#include <string>
using std::string;


struct _window_data;
typedef struct _window_data *window;
void clear_window(window wind, color clr);
void close_all_windows();
void close_window(const string &name);
void close_window(window wind);
bool has_window(string caption);
window open_window(string caption, int width, int height);
void refresh_window(window wind);
bool window_close_requested(const string &name);
bool window_close_requested(window wind);
int window_height(const string &name);
int window_height(window wind);
window window_named(string caption);
int window_width(const string &name);
int window_width(window wind);

#endif /* __window_manager_h */
