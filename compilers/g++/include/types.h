/*
 * SplashKit Types
 *
 * This file is generated from the SplashKit source.
 * Modifying it will cause failures.
 *
 */

#ifndef __types_h
#define __types_h

#include <string>
using std::string;


struct _animation_data;
typedef struct _animation_data *animation;
struct _animation_script_data;
typedef struct _animation_script_data *animation_script;
struct _bitmap_data;
typedef struct _bitmap_data *bitmap;
struct _display_data;
typedef struct _display_data *display;
struct _font_data;
typedef struct _font_data *font;
typedef enum {
    DRAW_TO_SCREEN,
    DRAW_TO_WORLD,
    DRAW_DEFAULT
} drawing_dest;
typedef enum {
    ALIGN_LEFT = 1,
    ALIGN_CENTER = 2,
    ALIGN_RIGHT = 4
} font_alignment;
typedef enum {
    NORMAL_FONT = 0,
    BOLD_FONT = 1,
    ITALIC_FONT = 2,
    UNDERLINE_FONT = 4
} font_style;
typedef struct {
    float x;
    float y;
} point_2d;
typedef struct {
    point_2d center;
    float radius;
} circle;
typedef struct {
    float r;
    float g;
    float b;
    float a;
} color;
typedef struct {
    float x;
    float y;
    float width;
    float height;
} rectangle;
typedef struct {
    void *dest;
    float scale_x;
    float scale_y;
    float angle;
    float anchor_offset_x;
    float anchor_offset_y;
    bool flip_x;
    bool flip_y;
    bool is_part;
    rectangle part;
    drawing_dest camera;
    int line_width;
    animation anim;
} drawing_options;
typedef struct {
    point_2d start_point;
    point_2d end_point;
} line;
typedef struct {
    point_2d points[4];
} quad;
typedef struct {
    point_2d points[3];
} triangle;
typedef struct {
    double x;
    double y;
} vector_2d;
typedef void (free_notifier)(void *pointer);

#endif /* __types_h */
