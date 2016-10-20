/*
 * SplashKit Images
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __images_h
#define __images_h
#include "types.h"

#include <string>
using std::string;


point_2d bitmap_cell_center(bitmap bmp);
circle bitmap_cell_circle(bitmap bmp, float x, float y);
circle bitmap_cell_circle(bitmap bmp, const point_2d pt);
circle bitmap_cell_circle(bitmap bmp, const point_2d pt, float scale);
int bitmap_cell_columns(bitmap bmp);
int bitmap_cell_count(bitmap bmp);
int bitmap_cell_height(bitmap bmp);
vector_2d bitmap_cell_offset(bitmap src, int cell);
rectangle bitmap_cell_rectangle(bitmap src);
rectangle bitmap_cell_rectangle(bitmap src, const point_2d &pt);
int bitmap_cell_rows(bitmap bmp);
int bitmap_cell_width(bitmap bmp);
point_2d bitmap_center(bitmap bmp);
circle bitmap_circle(bitmap bmp, const point_2d &pt);
string bitmap_filename(bitmap bmp);
int bitmap_height(bitmap bmp);
int bitmap_height(string name);
string bitmap_name(bitmap bmp);
bitmap bitmap_named(string name);
void draw_bitmap(bitmap bmp, float x, float y);
void draw_bitmap(bitmap bmp, float x, float y, drawing_options opts);
void draw_bitmap(string name, float x, float y);
void draw_bitmap(string name, float x, float y, drawing_options opts);
bool pixel_drawn_at_point(bitmap bmp, float x, float y);
bool pixel_drawn_at_point(bitmap bmp, int cell, float x, float y);

#endif /* __images_h */
